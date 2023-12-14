import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import contributionView from "../views/ContributionView.vue";
import descriptionView from "../views/DescriptionView.vue";
import notebookView from "../views/NotebookView.vue";
import attributionsView from "../views/attributionsView.vue";

const routes = [{
        path: "/",
        name: "home",
        meta: {
            title: "Home",
        },
        component: HomeView,
    },
    {
        path: "/contribution",
        name: "contribution",
        meta: {
            title: "Contribution",
        },
        component: contributionView,
    },
    {
        path: "/description",
        name: "description",
        meta: {
            title: "Description",
        },
        component: descriptionView,
    },
    {
        path: "/notebook",
        name: "notebook",
        meta: {
            title: "Notebook",
        },
        component: notebookView,
    },
    {
        path: "/attributions",
        name: "attributions",
        meta: {
            title: "Attributions",
        },
        component: attributionsView,
    },
    {
        path: "/team",
        meta: {
            title: "Team",
        },
        component: () =>
            import ("@/views/team.vue"),
    },
    {
        component: () =>
            import ("@/views/DescriptionView.vue"),
        path: "/description",
        meta: {
            title: "Description",
        },
    },
    {
        component: () =>
            import ("@/views/design.vue"),
        path: "/design",
        meta: {
            title: "Design",
        },
    },
    {
        component: () =>
            import ("@/views/engineering.vue"),
        path: "/engineering",
        meta: {
            title: "Engineering",
        },
    },
    {
        component: () =>
            import ("@/views/experiments.vue"),
        path: "/experiments",
        meta: {
            title: "Experiments",
        },
    },
    {
        component: () =>
            import ("@/views/results.vue"),
        path: "/results",
        meta: {
            title: "Results",
        },
    },
    {
        component: () =>
            import ("@/views/implementation.vue"),
        path: "/implementation",
        meta: {
            title: "Implementation",
        },
    },
    {
        component: () =>
            import ("@/views/ContributionView.vue"),
        path: "/contribution",
        meta: {
            title: "Contribution",
        },
    },
    {
        component: () =>
            import ("@/views/parts.vue"),
        path: "/parts",
        meta: {
            title: "Parts",
        },
    },
    {
        component: () =>
            import ("@/views/safety.vue"),
        path: "/safety",
        meta: {
            title: "Safety",
        },
    },
    {
        component: () =>
            import ("@/views/NotebookView.vue"),
        path: "/notebook",
        meta: {
            title: "Notebook",
        },
    },
    {
        path: "/model",
        component: () =>
            import ("@/views/model.vue"),
        meta: {
            title: "Model",
        },
    },
    {
        path: "/software",
        component: () =>
            import ("@/views/software.vue"),
        meta: {
            title: "Software",
        },
    },
    {
        path: "/hardware",
        component: () =>
            import ("@/views/hardware.vue"),
        meta: {
            title: "Hardware",
        },
    },
    {
        path: "/human-overview",
        component: () =>
            import ("@/views/human-overview.vue"),
        meta: {
            title: "Human Overview",
        },
    },
    {
        path: "/human-practices",
        component: () =>
            import ("@/views/human-practices.vue"),
        meta: {
            title: "Human Practice",
        },
    },
    // {
    //     path: "/best-human-practices",
    //     component: () =>
    //         import ("@/views/human-practices-best.vue"),
    //     meta: {
    //         title: "Best Human Practice",
    //     },
    // },
    {
        path: "/communication",
        component: () =>
            import ("@/views/communication.vue"),
        meta: {
            title: "Communication",
        },
    },
    {
        path: "/game",
        component: () =>
            import ("@/views/game.vue"),
        meta: {
            title: "Game",
        },
    },
    {
        path: "/team",
        component: () =>
            import ("@/views/team.vue"),
        meta: {
            title: "Team",
        },
    },
    {
        path: "/attributions",
        component: () =>
            import ("@/views/attributionsView.vue"),
        meta: {
            title: "Attributions",
        },
    },
    {
        path: "/collaborations",
        component: () =>
            import ("@/views/collaborations.vue"),
        meta: {
            title: "Collaborations",
        },
    },
    {
        path: "/gold",
        component: () =>
            import ("@/views/gold.vue"),
        meta: {
            title: "Gold",
        },
    },
    {
        path: "/silver",
        component: () =>
            import ("@/views/silver.vue"),
        meta: {
            title: "Silver",
        },
    },
    {
        path: "/bronze",
        component: () =>
            import ("@/views/bronze.vue"),
        meta: {
            title: "Bronze",
        },
    },
    {
        path: "/awards",
        component: () =>
            import ("@/views/awards.vue"),
        meta: {
            title: "Awards",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes,
});
router.beforeEach(async(to, from, next) => {
    window.document.title =
        to.meta.title == undefined ?
        "TJUSLS_China -iGEM 2023" :
        `${to.meta.title} | TJUSLS_China - iGEM 2023`;
    next();
});

export default router;