import Header from "./Header";

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className="bg-container">
      <Header />
      <main className={className}>{children}</main>
    </section>
  );
};

export default MainLayout;
