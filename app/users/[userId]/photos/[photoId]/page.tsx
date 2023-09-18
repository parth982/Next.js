interface Props {
  params: { photoId: number; userId: number };
}

const page = ({ params: { photoId, userId } }: Props) => {
  return (
    <div>
      Photo ID Info: {photoId} in User ID: {userId}
    </div>
  );
};

export default page;
