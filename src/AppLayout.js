import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./components/Notes";

function AppLayout({ notes }) {
 

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Notes sidebar */}
        <div style={{ width: 200, flexShrink: 0 }}>
          <Notes notes={notes} />
        </div>
        {/* Outlet */}
        <div style={{ flex: 1, marginLeft: 20 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;