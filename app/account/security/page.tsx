import LayoutHeader from "@/components/account/LayoutHeader";
import SecurityFields from "@/components/account/security/SecurityFields";

function Security() {
  return (
    <div className="space-y-6">
      <LayoutHeader
        title="Security settings"
        description="Change password and phone number"
      />
      <SecurityFields />
    </div>
  );
}

export default Security;
