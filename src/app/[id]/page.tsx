export async function generateStaticParams() {
  const id = [
    { id: "0" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
  return id;
}
const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="w-full h-screen text-5xl flex flex-col justify-center items-center">
      {id}
    </div>
  );
};

export default Page;
