import { Badge, Avatar } from "@/components/ui";
import { ProgressBar } from "@/components/ui/Base";
import { useState } from "react";

const Home = () => {
  const colors = [
    "Default",
    "Primary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Dark",
  ] as const;

  const sizes = ["Extra Small", "Small", "Default", "Large"] as const;
  const sizesAvatar = [
    "Extra Small",
    "Small",
    "Default",
    "Large",
    "Extra Large",
  ] as const;
  return (
    <>
      {sizes.map((size) => {
        return (
          <div key={size} className="inline-flex items-center gap-5">
            {colors.map((color) => (
              <Badge
                type="Pill"
                key={`${size}-${color}`}
                color={color} // Ép kiểu nếu cần
                size={size} // Ép kiểu nếu cần
                content="Badge"
                isDot
              />
            ))}
          </div>
        );
      })}

      <div className="inline-flex gap-5 items-center">
        {sizesAvatar.map((size) => (
          <Avatar.Root key={size} size={size}>
            <Avatar.Image
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed615427-7cbf-44ce-9725-34fe84f49000/dd8w9ht-3342dcb6-daf3-4c56-8c85-0dbdd233901c.jpg/v1/fit/w_828,h_1428,q_70,strp/anime_wallpaper_iphone_anime_wallpaper_k_anime_wal_by_foreverll_dd8w9ht-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2VkNjE1NDI3LTdjYmYtNDRjZS05NzI1LTM0ZmU4NGY0OTAwMFwvZGQ4dzlodC0zMzQyZGNiNi1kYWYzLTRjNTYtOGM4NS0wZGJkZDIzMzkwMWMuanBnIiwid2lkdGgiOiI8PTExMTMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ri-nXFx-bQNybQ0gHcGA95izhwohzRyJSNdTb-3Kjhs"
              alt="User Avatar"
            />
          </Avatar.Root>
        ))}
      </div>

      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
