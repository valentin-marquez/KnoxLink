import "../../styles/globals.css";
import ReactDOM from "react-dom/client"
import { ImportButton } from "@/components/button";
import { extractWorkshopId, isPZMod } from "@/utils/steamworkshop";

export default defineContentScript({
    matches: [
        "*://steamcommunity.com/sharedfiles/filedetails/*",
        "*://steamcommunity.com/workshop/filedetails/*",
    ],
    cssInjectionMode: "ui",

    async main(ctx) {
        // Only show the button if it's a Project Zomboid mod
        if (!isPZMod()) {
            return;
        }

        const currentUrl = window.location.href;
        const workshopId = extractWorkshopId(currentUrl);

        if (!workshopId) {
            console.error("Could not extract workshop ID");
            return;
        }

        const ui = await createShadowRootUi(ctx, {
            name: "knoxkit-button",
            position: "inline",
            anchor: ".game_area_purchase_game div a.btn_green_white_innerfade",
            append: "after",
            onMount: (container) => {
                const wrapper = document.createElement("div");
                wrapper.style.marginTop = "10px"; // Add some spacing for better visual separation
                container.append(wrapper);

                const root = ReactDOM.createRoot(wrapper);
                root.render(
                    <ImportButton
                        workshopId={workshopId}
                        url={currentUrl}
                    />
                );    
                return {
                    root, wrapper
                }
            },
            onRemove:(elements) => {
                elements?.root.unmount();
                elements?.wrapper.remove();
            }
        });

        ui.mount();
    },
})