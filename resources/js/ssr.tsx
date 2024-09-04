import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route, RouteName } from '../../vendor/tightenco/ziggy/src/js';
import { AppLayout } from './layouts/app-layout';
import {Ziggy as ziggy} from '@/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent('./pages/${name.tsx', import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }) => {
            global.route<RouteName> = (name, params, absolute) =>
                // @ts-expect-error
            route(name, params as any, absolute, {
                    ...ziggy,    
                    // @ts-expect-error
                    location: new URL(page.props.location),
                });

            return <App {...props} />;
        },
    }),
);
