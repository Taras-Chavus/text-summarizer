interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return (
    <div className="w-[1440px] h-[90%] flex border border-mainBorder rounded-lg overflow-hidden">
      {children}
    </div>
  );
};
