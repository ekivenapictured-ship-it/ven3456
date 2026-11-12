ALTER TABLE public.projects
    ADD COLUMN IF NOT EXISTS additional_packages JSONB NOT NULL DEFAULT '[]'::jsonb;

UPDATE public.projects AS project
SET additional_packages = COALESCE((
    SELECT jsonb_agg(
        jsonb_build_object(
            'id', package.id,
            'name', package.name,
            'price', COALESCE(linked_item.price, package.price)
        )
        ORDER BY package.name
    )
    FROM public.project_add_ons AS project_link
    JOIN public.add_ons AS linked_item ON linked_item.id = project_link.add_on_id
    JOIN public.packages AS package
      ON lower(btrim(package.name)) = lower(btrim(linked_item.name))
     AND package.id IS DISTINCT FROM project.package_id
    WHERE project_link.project_id = project.id
), '[]'::jsonb)
WHERE EXISTS (
    SELECT 1
    FROM public.project_add_ons AS project_link
    JOIN public.add_ons AS linked_item ON linked_item.id = project_link.add_on_id
    JOIN public.packages AS package
      ON lower(btrim(package.name)) = lower(btrim(linked_item.name))
     AND package.id IS DISTINCT FROM project.package_id
    WHERE project_link.project_id = project.id
);

DELETE FROM public.project_add_ons AS project_link
USING public.projects AS project,
      public.add_ons AS linked_item,
      public.packages AS package
WHERE project_link.project_id = project.id
  AND linked_item.id = project_link.add_on_id
  AND lower(btrim(package.name)) = lower(btrim(linked_item.name))
  AND package.id IS DISTINCT FROM project.package_id;

NOTIFY pgrst, 'reload schema';