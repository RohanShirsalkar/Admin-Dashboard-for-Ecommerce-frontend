import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ProductDetailsCard from "../components/productDetailsPage/ProductDetailsCard";
import ProductStatusCard from "../components/productDetailsPage/ProductStatusCard";
import ImageUploadCard from "../components/productDetailsPage/ImageUplaodCard";
import DeleteProductCard from "../components/productDetailsPage/DeleteProductCard";
import CategoryCard from "../components/productDetailsPage/CartegoryCard";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import AlertBar from "../components/common/AlertBar";
import useRouteGuard from "@/hooks/useRouteGuard";
import {
  getProductWithId,
  createNewProduct,
  updateProductWithID,
  deleteProductWithId,
} from "@/services/product_service";
import { useForm } from "react-hook-form";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const basePath = pathname.split("/")[1];
  const navigate = useNavigate();

  const [isProjectSaved, setIsProjectSaved] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
    watch,
    reset,
  } = useForm({ defaultValues: { status: "DRAFT" } });

  useEffect(() => {
    const makeHttpRequest = async () => {
      try {
        const { product } = await getProductWithId(id);
        reset({
          categoryId: product.categoryId,
          createdate: product.createdate,
          description: product.description,
          id: product.id,
          imageUrl: product.imageurl,
          images: product.images,
          price: product.price,
          status: product.status,
          stock: product.stock,
          thumbnailUrl: product.thumbnailurl,
          name: product.title,
          totalSales: product.totalsales,
          updatedate: product.updatedate,
          tags: product.tags?.map((tag) => tag.id),
          category: {
            value: product.category?.id,
            label: product.category?.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    makeHttpRequest();
  }, [id, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await updateProductWithID(id, {
        categoryId: data.category,
        title: data.name,
        price: parseInt(data.price),
        description: data.description,
        status: data.status,
        stock: 10,
        tags: data.tags,
      });
      setIsProjectSaved("true");
      navigate("/all-products");
      alert(`Product ${basePath === "edit-product" ? "Updated" : "Created"}`);
    } catch (error) {
      const parsedError = error.response.data;
      console.log(parsedError);
    }
  };

  const handleDiscard = () => {
    setIsProjectSaved(true);
    console.log(getValues());
  };

  const handleGoBack = async () => {
    if (!isProjectSaved && basePath !== "edit-product") {
      const confirmation = confirm(
        "You have unsaved changes, do you want to discard them?"
      );
      if (confirmation) {
        const response = await deleteProductWithId(id).catch((error) => {
          console.log("Error", error);
          alert("Error deleting product, please try again.");
        });
        // navigate("/all-products");
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };

  useRouteGuard();
  return (
    <section className="mt-6 max-w-6xl mx-auto min-h-screen pb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button onClick={handleGoBack} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {/* <h1 className="text-xl font-semibold">{product.title}</h1> */}
        </div>

        <div className="space-x-2 flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            onClick={handleDiscard}
          >
            Discard
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            size="sm"
            className="h-8 gap-1"
          >
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Save Product
            </span>
          </Button>
        </div>
      </div>

      {Object.keys(errors).length !== 0 && (
        <div className="mt-4">
          <AlertBar
            type={"error"}
            title={"Error"}
            description={"Fiels are missing"}
          />
        </div>
      )}

      <div className="flex md:flex-row flex-col w-full gap-6 mt-4">
        <div className="flex flex-col gap-4 md:w-[70%]">
          <ProductDetailsCard register={register} errors={errors} />
          <CategoryCard control={control} errors={errors} />
        </div>
        <div className="flex flex-col gap-4 md:w-[30%]">
          <ProductStatusCard control={control} errors={errors} />
          <ImageUploadCard
            id={id}
            getValues={getValues}
            setValue={setValue}
            watch={watch}
          />
          <DeleteProductCard id={id} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
