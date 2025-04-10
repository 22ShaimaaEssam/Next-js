export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Category Section</h2>
      <div className="bg-light p-3 rounded">{children}</div>
    </div>
  );
}