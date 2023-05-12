import changeStatus from "./changeStatus";

export function dragStartHandler(e :any): void{
    e.dataTransfer.setData("text/plain", e.target.id)
    e.dataTransfer.dropEffect = "move";
}

export function dragoverHandler(e: any): void{
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
export function dropHandler(e: any): void {
    e.preventDefault();
    e.currentTarget.appendChild(document.querySelector('#dropEnd'));
  }