export function CardLayout({
  SideNav,
  children,
}: {
  SideNav: React.ReactElement;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen p-1 bg-grayscale-2 text-grayscale-11">
      {SideNav}
      <div className="grow overflow-y-auto">
        <div className="flex min-h-full border rounded-xl bg-grayscale-1 border-grayscale-6">
          {children}
        </div>
      </div>
    </div>
  );
}
