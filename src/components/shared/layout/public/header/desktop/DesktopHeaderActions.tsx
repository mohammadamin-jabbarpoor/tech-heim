import CartButton from "../mobile/CartButton";
import UserMenu from "../mobile/UserMenu";
import SearchButton from "./SearchButton";

function DesktopHeaderActions() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <SearchButton />

        <CartButton />

        <UserMenu />
      </div>
    </>
  );
}

export default DesktopHeaderActions;
