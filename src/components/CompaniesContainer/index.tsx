import { FunctionComponent } from "react";

import { CompaniesTier } from "../../utils/GetColorTier";
import Company, { CompanyProps } from "../Company";

import { useTheme } from "next-themes";

interface CompaniesContainerProps {
  tier: CompaniesTier;
  companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
  tier,
  companies,
}) => {
  const { theme } = useTheme();

  const getTierStyling = (tier: CompaniesTier): string => {
    switch (tier) {
      case "Diamond":
        return `border-blue-500 text-blue-500 drop-shadow-[0px_0px_4px_#3b82f6] text-4xl md:text-6xl`;
      case "Gold":
        return `border-yellow-400 text-yellow-400 drop-shadow-[0px_0px_4px_#facc15] text-4xl md:text-6xl`;
      case "Silver":
        return `${
          theme === "light" ? "text-gray-400" : "text-gray-300"
        } drop-shadow-[2px_6px_2px_#c0c0c0] "border-gray-500" text-4xl md:text-6xl`;
      default:
        throw new Error("Tier not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`${getTierStyling(
          tier
        )} z-0 mx-2 mb-8 text-center font-poppins font-semibold lg:mb-4`}
      >
        {tier}
      </h2>
      <section
        className={`mb-12 w-full rounded-3xl  border-2 border-black border-opacity-50 md:w-3/4 ${
          theme === "light" ? "bg-gray-800" : "bg-white"
        } bg-opacity-20`}
      >
        <div className="mt-2 grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-2 xl:grid-cols-2">
          {companies.map((company) => {
            return <Company key={company.name} {...company} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default CompaniesContainer;
