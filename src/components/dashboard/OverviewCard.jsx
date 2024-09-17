import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OverviewCard = ({ children, title, main }) =>
  // { title, main, type, icon }
  {
    return (
      <Card className=" w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {children}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{main}</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
    );
  };

export default OverviewCard;
