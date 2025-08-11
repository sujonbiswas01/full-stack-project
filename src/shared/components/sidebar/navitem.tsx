import {
  BarChart,
  Building,
  ChevronDown,
  ChevronUp,
  FileText,
  Headphones,
  MonitorSmartphone,
  Package,
  Settings,
  TicketCheck,
  User,
  UserCircle,
} from "lucide-react";
import React from "react";
interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  hasDropDown?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  isNested?: boolean;
  badge?: string;
  badgeColor?: string;
  isRound?: boolean;
  subtext?: string;
  isCollapse?: boolean;
}
const Navitem = ({
  icon,
  label,
  isActive = false,
  hasDropDown = false,
  isOpen = false,
  isNested = false,
  badge,
  badgeColor = "blue",
  isRound = false,
  isCollapse = false,
  onClick,
  subtext,
}: NavItemProps) => {
  const getIcon = () => {
    switch (icon) {
      case "default":
        return <User size={18} />;
      case "api":
        return <Settings size={18} />;
      case "log":
        return <FileText size={18} />;
      case "application":
        return <MonitorSmartphone size={18} />;
      case "transaction":
        return <BarChart size={18} />;
      case "support":
        return <Headphones size={18} />;
      case "create-ticket":
        return <TicketCheck size={18} />;
      case "packs":
        return <Package size={18} />;
      case "mon-entreprise":
        return <Building size={18} />;
      case "avatar":
        return <UserCircle size={18} />;
    }
  };
  const getBadgeColasses = () => {
    if (badgeColor === "blue") {
      return "bg-blue-500 text-white";
    } else if (badgeColor === "gray") {
      return "bg-white border border-gray-300 text-gray-600";
    }
    return "bg-blue-500 text-white";
  };

  return (
    <div
      className={`${
        isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
      } ${isNested ? "md:pl-10 pl-4" : ""} ${
        isCollapse ? "justify-center" : ""
      } flex items-center rounded-lg px-4 py-2 cursor-pointer transition-colors`}
      onClick={onClick}
    >
      <div className="flex items-center flex-1 ">
        <span className={`${isActive ? "text-white" : "text-gray-500"}`}>
          {getIcon()}
        </span>
        {!isCollapse && (
          <>
            <span className={`ml-3 ${subtext ? "font-medium" : ""}`}>
              {label}
            </span>
            {subtext && (
              <div className="ml-2 flex flex-col items-start">
                <span className="text-xs text-gray-400">{subtext}</span>
              </div>
            )}
          </>
        )}
      </div>
      {!isCollapse && (
        <>
          {badge && (
            <span
              className={`${
                isRound
                  ? "rounded-full w-5 h-5 flex items-center justify-center"
                  : "rounded px-2 py-0.5"
              } ${getBadgeColasses()} text-xs ml-2`}
            >
              {badge}
            </span>
          )}
          {hasDropDown && (
            <span className="ml-2 ">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Navitem;
