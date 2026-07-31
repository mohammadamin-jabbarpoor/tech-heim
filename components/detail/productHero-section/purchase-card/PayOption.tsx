import { ProductDetailDto } from "@/lib/prisma-types";

type PayOptionProps = {
  installmentPrice: number | null;

  paymentType: "full" | "installment";

  selectedMonth: number | null;

  onPaymentTypeChange: React.Dispatch<
    React.SetStateAction<"full" | "installment">
  >;

  onSelectedMonthChange: React.Dispatch<React.SetStateAction<number | null>>;
};

function PayOption({
  installmentPrice,
  paymentType,
  selectedMonth,
  onPaymentTypeChange,
  onSelectedMonthChange,
}: PayOptionProps) {
  const months = [3, 6, 12, 18];

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-3.5">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
              paymentType === "full" ? "border-primary" : "border-gray-400"
            }`}
          >
            {paymentType === "full" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>

          <input
            type="radio"
            name="payment"
            value="full"
            checked={paymentType === "full"}
            onChange={() => onPaymentTypeChange("full")}
            className="sr-only"
          />

          <span
            className={`font-light ${
              paymentType === "full" ? "text-gray-900" : "text-gray-800"
            }`}
          >
            Pay Now
          </span>
        </label>

        <div>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                paymentType === "installment"
                  ? "border-primary"
                  : "border-gray-400"
              }`}
            >
              {paymentType === "installment" && (
                <div className="h-3 w-3 rounded-full bg-primary" />
              )}
            </div>

            <input
              type="radio"
              name="payment"
              value="installment"
              checked={paymentType === "installment"}
              onChange={() => onPaymentTypeChange("installment")}
              className="sr-only"
            />

            <span
              className={`font-light ${
                paymentType === "installment"
                  ? "text-gray-900"
                  : "text-gray-800"
              }`}
            >
              Buy in installments
            </span>
          </label>

          <p className="ml-7 mt-1 text-xs font-light text-gray-800">
            choose your installments period
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between gap-2">
        {months.map((month) => (
          <button
            key={month}
            type="button"
            disabled={paymentType !== "installment"}
            onClick={() => onSelectedMonthChange(month)}
            className={`flex flex-col items-center justify-center px-2 pt-0.5 pb-1.5 rounded border transition
                ${paymentType !== "installment" ? "cursor-not-allowed border-gray-500 text-gray-500" : ""}

                ${
                  selectedMonth === month && paymentType === "installment"
                    ? "border-primary-400 bg-primary-25 text-primary-400"
                    : "border-gray-200"
                }`}
          >
            <span
              className={`font-light text-lg ${selectedMonth !== month && paymentType === "installment" ? "text-gray-800" : ""}`}
            >
              {month}
            </span>
            <span
              className={`font-light text-xs ${selectedMonth !== month && paymentType === "installment" ? "text-gray-600" : ""}`}
            >
              Months
            </span>
          </button>
        ))}
      </div>
      <div>
        {paymentType === "installment" && installmentPrice && (
          <p className="text-sm font-light">
            ${installmentPrice.toFixed(2)}
            <span className="text-xs text-gray-600">/Month</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default PayOption;
