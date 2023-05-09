import { useRouter } from "next/navigation";

export const File = ({
  fileName,
  path,
}: {
  fileName: string;
  path: string;
}) => {
  const router = useRouter();
  return (
    <div className="m-2 flex flex-col items-center justify-center">
      <img
        src="/folder-icon.webp"
        alt="folder-icon"
        className="w-40 py-3 hover:rounded-lg hover:border-2 hover:border-gray-400 hover:bg-black/30"
        onDoubleClick={() => {
          router.push(path);
        }}
      />
      {fileName}
    </div>
  );
};
