import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../styles/Navbar.css";


function Navbar() {
	return (
		<NavigationMenu.Root className="NavigationMenuRoot">
			<NavigationMenu.List className="NavigationMenuList">
      <NavigationMenu.Item>
					<NavigationMenu.Link
						className="NavigationMenuLink"
            href="/"
					>
						Home
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						DQM1 <CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List one">
							<ListItem href="/dqm1/monsterlist" title="Monster List" />
							<ListItem href="/dqm1/breedingmechanics" title="Breeding Mechanics" />
							<ListItem href="/dqm1/skills" title="Skills List" />
							<ListItem href="/dqm1/items" title="Item List" />
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						DQM2 <CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List one">
							<ListItem title="Coming soon" />
						</ul>
						</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="NavigationMenuIndicator">
					<div className="Arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="ViewportPosition">
				<NavigationMenu.Viewport className="NavigationMenuViewport" />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames("ListItemLink", className)}
					{...props}
					ref={forwardedRef}
				>
					<div className="ListItemHeading">{title}</div>
					<p className="ListItemText">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

export default Navbar
