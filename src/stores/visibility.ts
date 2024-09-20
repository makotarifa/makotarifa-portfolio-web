import { defineStore } from "pinia";

export const useVisibilityStore = defineStore("visibility", {
    state: () => ({
        visibility: [
            { key: "isVisibleMain", value: false },
            { key: "isVisibleExperiencia", value: false },
            { key: "isVisibleSobreMi", value: false },
            { key: "isVisibleProyectos", value: false },
            { key: "isVisibleContacto", value: false }
        ]
    }),
    actions: {
        setVisibility(key: string, value: boolean) {
            const item = this.visibility.find(v => v.key === key);
            if (item) {
                console.log("Setting visibility for", key, "to", value);
                item.value = value;
            }
        }
    }
});