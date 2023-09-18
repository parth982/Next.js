import React from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProdFilter = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProdFilter with Params: {slug} + Query Params sortOrder: {sortOrder}
    </div>
  );
};

export default ProdFilter;
