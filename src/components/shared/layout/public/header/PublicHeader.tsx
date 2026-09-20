import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";

function PublicHeader() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}

export default PublicHeader;
