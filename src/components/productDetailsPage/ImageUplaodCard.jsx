import { useState, useEffect } from "react";
import placeholderImg from "../../assets/placeholder.svg";
import ImageUpladerDialog from "../productDetailsPage/ImageUpladerDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, X } from "lucide-react";
import { Button } from "../ui/button";
import classNames from "classnames";
import { deleteProductImageWithID } from "@/services/upload_service";

const ImageUplaodCard = ({ getValues, setValue, watch, id }) => {
  const images = getValues("images");
  const watchImages = watch("images");

  const [peviewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setPreviewImage(images[0].url);
    } else {
      setPreviewImage(null);
    }
  }, [images]);

  const handleDeleteImage = async (id) => {
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      try {
        const { image } = await deleteProductImageWithID(id);
        setValue(
          "images",
          images.filter((img) => img.id !== image.id)
        );

        // add a toast here
      } catch (error) {
        alert("Error deleting");
        console.error(error);
      }
    }
  };

  return (
    <Card className="overflow-hidden shadow">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <img
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src={peviewImage || placeholderImg}
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            {images?.map((image, index) => (
              <div
                className="max-w-[200px] relative"
                onClick={() => setPreviewImage(image.url)}
              >
                <img
                  alt="Product image"
                  className={classNames(
                    "aspect-square w-full border rounded-md object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out",
                    {
                      "border-4 border-slate-700": peviewImage === image.url,
                    }
                  )}
                  // className="aspect-square w-full border rounded-md object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                  height="100px"
                  src={image.url}
                  width="100px"
                />
                <Button
                  variant="destructive"
                  size={"xsm"}
                  className="absolute top-0 right-0   hover:opacity-100 m-2 border-none"
                  onClick={() => handleDeleteImage(image.id)}
                >
                  <X className="h-4 w-4" color="white" />
                </Button>
              </div>
            ))}
            <div>
              <ImageUpladerDialog images={images} setValue={setValue} id={id} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUplaodCard;
