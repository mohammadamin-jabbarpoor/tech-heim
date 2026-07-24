"use client";

import { useState } from "react";
import LayoutHeader from "../LayoutHeader";
import PersonalDataGrid from "./PersonalDataGrid";
import FieldModal from "./FieldModal";
import { EditableField } from "./types";

type PersonalDataProps = {
  user: {
    id: string;
    name: string | null;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    postalCode: string | null;
  };
};

function PersonalData({ user }: PersonalDataProps) {
  const [editingField, setEditingField] = useState<EditableField | null>(null);
  return (
    <>
      <main className="space-y-6">
        <LayoutHeader
          title="Identification"
          description="Verify your identity"
        />
        <div>
          <PersonalDataGrid
            user={user}
            onEdit={(field) => setEditingField(field)}
          />
        </div>
      </main>
      {editingField && (
        <FieldModal
          field={editingField}
          user={user}
          onClose={() => setEditingField(null)}
        />
      )}
    </>
  );
}

export default PersonalData;
