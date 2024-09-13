import { useContext } from "react";
import StoreNameCard from "../components/settingsPage/StoreNameCard";
import LocationSettings from "../components/settingsPage/LocationSettings";
import SupportSettings from "../components/settingsPage/SupportSettings";
import PaymentSettings from "../components/settingsPage/PaymentSettings";
import SideNav from "../components/settingsPage/SideNav";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import SettingsFormContext from "../context/SettingsFormContext";
import useRouteGuard from "@/hooks/useRouteGuard";

const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    setError,
    setValue,
    getValues,
    watch,
  } = useContext(SettingsFormContext);

  const handleSaveChanges = (data) => {
    console.log(data);
  };

  useRouteGuard();
  return (
    <section className="mt-6 max-w-full md:max-w-6xl mx-auto pb-4">
      <div className="flex md:flex-row md:gap-0 gap-4 flex-col items-start">
        <div className="md:w-[20%] hidden md:block relative">
          <div className="fixed">
            <SideNav />
          </div>
        </div>
        <div className="md:w-[80%] w-full space-y-4 ">
          <div className="">
            <div className="flex justify-between items-end">
              <h1 className="text-2xl font-semibold">Settings</h1>
              <Button onClick={handleSubmit(handleSaveChanges)} size="sm">
                Save
              </Button>
            </div>
            <Separator className="my-4" />
          </div>
          <div id="general">
            <StoreNameCard />
          </div>
          <div id="location">
            <LocationSettings />
          </div>
          <div id="support">
            <SupportSettings />
          </div>
          <div id="payments">
            <PaymentSettings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
