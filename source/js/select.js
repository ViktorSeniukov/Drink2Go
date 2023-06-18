import {SELECT_WIDTH} from "./variable.js";

export default function initSelect() {
    $(function() {
        $('#select').select2({
            width: `${SELECT_WIDTH}px`,
        });
    })
}