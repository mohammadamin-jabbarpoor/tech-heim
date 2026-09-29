type LayoutHeaderProps = {
  title: string;
  description: string;
};

function LayoutHeader({ title, description }: LayoutHeaderProps) {
  return (
    <div className="space-y-1 md:space-y-2">
      <p className="font-medium md:text-xl">{title}</p>
      <p className="font-light text-gray-600 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

export default LayoutHeader;
