// This file imports all commands and exports them as a single object.
import { about } from './about';
import { banner } from './banner';
import { date } from './date';
import { help } from './help';
import { projects } from './projects';
import { socials } from './socials';
import { whoami } from './whoami';

export const commands = {
  about,
  banner,
  date,
  help,
  projects,
  socials,
  whoami,
};
