-- ================================================================
-- 15_create_rpc_functions.sql
-- Buat 2 PostgreSQL Function (RPC) yang dibutuhkan aplikasi:
--   1. increment_card_balance     -> update saldo kartu secara atomik
--   2. create_transaction_with_balance_update -> insert transaksi + update saldo dalam 1 transaksi DB
--
-- CARA PAKAI: Jalankan file ini di Supabase SQL Editor (Ctrl+A -> Run)
-- ================================================================

-- ----------------------------------------------------------------
-- 1. increment_card_balance
--    Dipanggil oleh: updateCardBalance() di transactions.ts baris 164
--    Parameter:
--      p_card_id UUID    -> ID kartu yang akan diupdate
--      p_delta   NUMERIC -> jumlah penambahan (positif) atau pengurangan (negatif)
-- ----------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.increment_card_balance(
  p_card_id UUID,
  p_delta    NUMERIC
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.cards
  SET balance = balance + p_delta
  WHERE id = p_card_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Card with id % not found', p_card_id;
  END IF;
END;
$$;

-- Beri akses ke role anon dan authenticated
GRANT EXECUTE ON FUNCTION public.increment_card_balance(UUID, NUMERIC) TO anon, authenticated;


-- ----------------------------------------------------------------
-- 2. create_transaction_with_balance_update
--    Dipanggil oleh: createTransaction() di transactions.ts baris 59
--    Menggabungkan INSERT transaksi + UPDATE saldo kartu dalam 1 DB transaction
--    sehingga keduanya atomik (tidak akan setengah-setengah).
--
--    Parameter:
--      p_transaction_data JSONB   -> data transaksi (date, description, amount, dll)
--      p_card_id          UUID    -> ID kartu yang akan diupdate saldo
--      p_amount_delta     NUMERIC -> delta saldo (positif = pemasukan, negatif = pengeluaran)
-- ----------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.create_transaction_with_balance_update(
  p_transaction_data JSONB,
  p_card_id          UUID,
  p_amount_delta     NUMERIC
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_transaction_id UUID;
  v_result         JSONB;
  v_date           TEXT;
  v_description    TEXT;
  v_amount         NUMERIC;
  v_type           TEXT;
  v_project_id     UUID;
  v_category       TEXT;
  v_method         TEXT;
  v_pocket_id      UUID;
  v_printing_item  TEXT;
BEGIN
  -- Ekstrak field dari JSON
  v_date          := p_transaction_data->>'date';
  v_description   := p_transaction_data->>'description';
  v_amount        := (p_transaction_data->>'amount')::NUMERIC;
  v_type          := p_transaction_data->>'type';
  v_project_id    := NULLIF(p_transaction_data->>'project_id', '')::UUID;
  v_category      := p_transaction_data->>'category';
  v_method        := p_transaction_data->>'method';
  v_pocket_id     := NULLIF(p_transaction_data->>'pocket_id', '')::UUID;
  v_printing_item := p_transaction_data->>'printing_item_id';

  -- INSERT transaksi baru
  INSERT INTO public.transactions (
    date, description, amount, type,
    project_id, category, method,
    pocket_id, card_id, printing_item_id
  )
  VALUES (
    v_date::TIMESTAMP WITH TIME ZONE,
    v_description,
    v_amount,
    v_type,
    v_project_id,
    v_category,
    v_method,
    v_pocket_id,
    p_card_id,
    v_printing_item
  )
  RETURNING id INTO v_transaction_id;

  -- UPDATE saldo kartu secara atomik
  UPDATE public.cards
  SET balance = balance + p_amount_delta
  WHERE id = p_card_id;

  -- Return data transaksi yang baru dibuat sebagai JSON
  SELECT row_to_json(t)::JSONB INTO v_result
  FROM (
    SELECT * FROM public.transactions WHERE id = v_transaction_id
  ) t;

  RETURN v_result;

EXCEPTION WHEN OTHERS THEN
  RAISE;
END;
$$;

-- Beri akses ke role anon dan authenticated
GRANT EXECUTE ON FUNCTION public.create_transaction_with_balance_update(JSONB, UUID, NUMERIC) TO anon, authenticated;


-- ----------------------------------------------------------------
-- Verifikasi: cek kedua function sudah terdaftar
-- ----------------------------------------------------------------
SELECT
  routine_name,
  routine_type,
  data_type AS return_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name IN ('increment_card_balance', 'create_transaction_with_balance_update')
ORDER BY routine_name;
