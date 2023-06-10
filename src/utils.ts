
export function generateRandomColor() {
        const max = 255;
        const red = Math.floor(Math.random() * (max + 1));
        const gre = Math.floor(Math.random() * (max + 1));
        const blu = Math.floor(Math.random() * (max + 1));
        return "#"
            + (red<16?'0':'') + Math.round(red).toString(16)
            + (gre<16?'0':'') + Math.round(gre).toString(16)
            + (blu<16?'0':'') + Math.round(blu).toString(16);
}