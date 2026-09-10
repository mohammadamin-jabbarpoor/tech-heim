import CartButton from "../mobile/CartButton";
import UserMenu from "../mobile/UserMenu";
import SearchButton from "./SearchButton";

// type NavbarActionsProps = {
//   session: typeof authClient.$Infer.Session | null;
// };

function DesktopHeaderActions() {
  // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <SearchButton />

        <CartButton />

        <UserMenu
        // session={session}
        // onLoginClick={() => setIsAuthModalOpen(true)}
        />
      </div>
      {/* {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} />
      )} */}
    </>
  );
}

export default DesktopHeaderActions;
