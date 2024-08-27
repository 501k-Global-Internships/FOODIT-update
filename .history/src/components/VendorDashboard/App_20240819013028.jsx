import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Dashboard />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav vendorName="Vendor's Name" />
        <main className="flex-1 overflow-y-auto">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
