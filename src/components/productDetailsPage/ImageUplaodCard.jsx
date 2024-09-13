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

const ImageUplaodCard = ({ getValues, setValue, watch }) => {
  const images = getValues("images");
  const watchImages = watch("images");

  const [peviewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setPreviewImage(images[0].data_url);
    } else {
      setPreviewImage(null);
    }
  }, [images]);

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
                onClick={() => setPreviewImage(image.data_url)}
              >
                <img
                  alt="Product image"
                  className="aspect-square w-full border rounded-md object-cover cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                  height="100px"
                  src={image.data_url}
                  width="100px"
                />
              </div>
            ))}
            <div>
              <ImageUpladerDialog images={images} setValue={setValue} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUplaodCard;
