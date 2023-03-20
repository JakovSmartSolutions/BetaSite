import Link from "next/link";

interface Props {
  name?: any;
  children?: any;
}

export const Breadcrumb = ({ name, children }: Props) => {
  return (
    <div className="breadcrumb">
      <Link href="/">Početna strana</Link>
      <span> / </span>
      <span>{children}</span>
      <span>{name}</span>
    </div>
  );
};
