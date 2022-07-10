/* eslint-disable no-console */
/* eslint-disable prefer-spread */

// import { format } from 'date-fns';

// const clientSideLogging = process.env.LOG_LEVEL;
// const LOG_PREFIX = format(new Date(), 'yyyy-MM-dd HH:MM:ss');

/* eslint-disable no-console */
/* eslint-disable prefer-spread */

import { format } from 'date-fns';

const LOG_PREFIX = format(new Date(), 'yyyy-MM-dd HH:MM:ss');

class Logger {
  static trace = console.trace.bind(window.console, `LOG - ${LOG_PREFIX} -`);

  static info = console.info.bind(window.console, `LOG - ${LOG_PREFIX} -`);

  static log = console.log.bind(window.console, `LOG - ${LOG_PREFIX} -`);

  static debug = console.debug.bind(window.console, `LOG - ${LOG_PREFIX} -`);

  static warn = console.warn.bind(window.console, `LOG - ${LOG_PREFIX} -`);

  static error = console.error.bind(window.console, `LOG - ${LOG_PREFIX} -`);
}

export { Logger };
