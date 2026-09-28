type LayoutHeaderProps = {
  title: string;
  description: string;
};

function LayoutHeader({ title, description }: LayoutHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium text-xl">{title}</p>
      <p className="font-light text-gray-600">{description}</p>
    </div>
  );
}

export default LayoutHeader;
