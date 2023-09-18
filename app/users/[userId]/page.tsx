import { notFound } from "next/navigation";

interface Props {
  params: { userId: number };
}

const UserInfo = ({ params: { userId } }: Props) => {
  if (userId > 10) notFound();
  return <div>User ID Info: {userId}</div>;
};

export default UserInfo;
