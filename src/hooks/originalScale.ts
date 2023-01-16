export const useOriginalScale = (containerId: string) => {
    const App: any = document.getElementById(containerId); //получаем div по его id

    App.style.zoom = 1 / devicePixelRatio


}