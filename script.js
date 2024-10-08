highestZ = 3;

const plants = ["plant1", "plant2", "plant3", "plant4", "plant5", "plant6", "plant7", "plant8", "plant9", "plant10", "plant11", "plant12","plant13", "plant14"];

plants.forEach(id => {
    //I get the element
    element = document.getElementById(id);
    //I call functions "to give him life"
    dragElement(element);
    bringToFront(element);
});

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 -e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

function bringToFront(terrariumElement) {
    terrariumElement.ondblclick = actualize;
    function actualize() {
        ++highestZ;
        terrariumElement.style.zIndex = highestZ;
    }
}