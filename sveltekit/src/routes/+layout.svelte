<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import NavMenu from "$lib/components/NavMenu.svelte";

	function drawerOpen(): void {
		drawerStore.open({});
	}

</script>

<svelte:head>
	<meta name="description" content="Self-hosted Document Q&A" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@demarcait" />
	<meta property="og:title" content="demarcait" />
	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content="{PUBLIC_ORIGIN || $page.url.origin}{base}" /> -->
	<!-- <meta property="og:image" content="{PUBLIC_ORIGIN || $page.url.origin}{base}/thumbnail.png" /> -->
</svelte:head>

<Drawer width="w-64">
	<NavMenu />
</Drawer>

<!-- App Shell -->
<AppShell regionPage="bg-surface-50-900-token" slotSidebarLeft="bg-surface-100-800-token">
	<svelte:fragment slot="sidebarLeft">
		<!-- Sidebar -->
		<nav id="sidebar-left" class="hidden md:block">
			<NavMenu />
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="md:hidden">
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">(actions)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
