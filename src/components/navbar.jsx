import { ArrowDownToLine, Printer } from "lucide-react";

export default function Navbar() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="navbar-container">
      <h1>CV Maker</h1>
      <button className="print-btn no-print tablet" onClick={handlePrint}>
        <Printer size={20} />
        Print / Save CV
      </button>
      <button className="non-tablet">
        <ArrowDownToLine size={20} />
      </button>
    </div>
  );
}
