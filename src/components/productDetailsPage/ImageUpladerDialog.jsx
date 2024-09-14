import { useState, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, Upload, DeleteIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import FormContext from "../../context/FormContext";

import ImageUploading from "react-images-uploading";

const ImageUpladerDialog = ({ images, setValue }) => {
  const maxNumber = 5;

  const onChange = (imageList) => {
    setValue("images", imageList);
  };

  return (
    <Dialog>
      <DialogTrigger className="border w-full h-full rounded-md border-dashed bg-slate-100 py-6">
        <Upload className="h-6 w-6 text-muted-foreground mx-auto" />
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="mt-4">
          <div>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              acceptType={["jpg"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemoveAll,
                onImageRemove,
              }) => (
                <div>
                  <div className="flex items-center justify-between mt-2">
                    <DialogTitle className="mb-2 text-2xl">
                      All Images
                    </DialogTitle>
                    <div className="space-x-2">
                      <Button variant="secondary" onClick={onImageRemoveAll}>
                        Remove All{" "}
                      </Button>
                      <Button onClick={onImageUpload}>Upload </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {imageList.map((image, index) => (
                      <div key={index} className="max-w-[200px] relative">
                        <img
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src={image.data_url}
                          width="84"
                        />
                        <Button
                          variant="outline"
                          size={"sm"}
                          className="absolute top-0 right-0 bg-slate-100 opacity-60 hover:opacity-100 m-2 border-none"
                          onClick={() => onImageRemove(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUpladerDialog;
