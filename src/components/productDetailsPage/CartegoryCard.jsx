import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Controller, set } from "react-hook-form";
import FromDropdowm from "../common/FormDropdown";
import MultiSelectDropdown from "../common/MultiSelectDropdown";
import MultiselectComboBox from "../common/MultiselectComboBox";
import { getAllCategories } from "@/services/category_service";
import { useEffect, useState } from "react";
import { getAllTags } from "@/services/tags_service";

const CartegoryCard = ({ control }) => {
  const [categories, setCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const makeGetRequest = async () => {
      try {
        const categoriesResponse = await getAllCategories();
        const tagsResponse = await getAllTags();
        const { tags } = tagsResponse;
        const { categories } = categoriesResponse;
        setCategories(
          categories.map((cat) => ({ label: cat.name, value: cat.id }))
        );
        setAllTags(tags.map((tag) => ({ label: tag.name, value: tag.id })));
      } catch (error) {
        console.log(error);
      }
    };
    makeGetRequest();
  }, []);

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <FromDropdowm
                  onChange={onChange}
                  value={value?.value}
                  options={categories}
                />
              )}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="category">Tags</Label>
            <Controller
              name="tags"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <MultiselectComboBox
                  onChange={onChange}
                  value={value}
                  options={allTags}
                  type={"Tags"}
                />
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartegoryCard;
