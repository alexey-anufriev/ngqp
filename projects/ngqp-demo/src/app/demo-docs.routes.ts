import { Routes, UrlSegment } from '@angular/router';
import { DocsPage } from './docs-page';
import { IntroductionDocsComponent } from './docs-items/introduction/introduction-docs.component';
import { UsageGuideDocsComponent } from './docs-items/usage-guide/usage-guide-docs.component';
import { GettingHelpDocsComponent } from './docs-items/getting-help/getting-help-docs.component';
import { ModelConfigurationDocsComponent } from './docs-items/model-configuration/model-configuration-docs.component';
import { ModelUsageDocsComponent } from './docs-items/model-usage/model-usage-docs.component';
import { GlobalConfigurationDocsComponent } from './docs-items/global-configuration/global-configuration-docs.component';
import { CustomControlValueAccessorDocsComponent } from './docs-items/custom-control-value-accessor/custom-control-value-accessor-docs.component';

export const DOCS_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/docs/introduction',
    },

    {
        path: 'introduction',
        component: IntroductionDocsComponent,
        data: {
            docsPage: DocsPage.INTRODUCTION,
        },
    },
    {
        path: 'usage',
        component: UsageGuideDocsComponent,
        data: {
            docsPage: DocsPage.USAGE_GUIDE,
        },
    },
    {
        path: 'getting-help',
        component: GettingHelpDocsComponent,
        data: {
            docsPage: DocsPage.GETTING_HELP,
        },
    },
    {
        path: 'model-configuration',
        component: ModelConfigurationDocsComponent,
        data: {
            docsPage: DocsPage.MODEL_CONFIGURATION,
        },
    },
    {
        path: 'model-usage',
        component: ModelUsageDocsComponent,
        data: {
            docsPage: DocsPage.MODEL_USAGE,
        },
    },
    {
        path: 'global-configuration',
        component: GlobalConfigurationDocsComponent,
        data: {
            docsPage: DocsPage.GLOBAL_CONFIGURATION,
        },
    },
    {
        path: 'custom-accessor',
        component: CustomControlValueAccessorDocsComponent,
        data: {
            docsPage: DocsPage.CUSTOM_CONTROL_VALUE_ACCESSOR,
        },
    },
];

export function getRouteForPage(page: DocsPage): string {
    const foundRoute = DOCS_ROUTES.find(route => route.data && route.data.docsPage === page);
    if (!foundRoute) {
        throw new Error(`Cannot find route for docs page ${page}`);
    }

    return `/docs/${foundRoute.path}`;
}

export function getPageForRoute(segment: UrlSegment): DocsPage {
    const foundPage = DOCS_ROUTES.find(route => route.path === segment.path);
    if (!foundPage) {
        throw new Error(`Cannot find route for segment ${segment.path}`);
    }

    return foundPage.data.docsPage as DocsPage;
}