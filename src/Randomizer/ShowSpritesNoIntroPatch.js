import patchText from './tables/show_sprites_no_intro.txt';
import { utils } from 'randomtools-js';

const ShowSpritesNoIntroPatch = {
    name: "Show sprites no intro",
    entries: utils.standardPatchLoader(patchText),
};

export default ShowSpritesNoIntroPatch;