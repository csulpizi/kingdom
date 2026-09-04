export async function addHotkeyListener(
    waitThenUnlisten: Promise<() => Promise<void>>,
    onChoose: () => void,
    hotkey: string,
) {
    const listener: (e: KeyboardEvent) => void = (e) => {
        if (e.key == hotkey) {
            onChoose();
        }
    };
    document.addEventListener("keydown", listener);
    await waitThenUnlisten;
    document.removeEventListener("keydown", listener);
}
