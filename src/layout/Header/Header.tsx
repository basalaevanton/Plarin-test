import React from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

import cn from "classnames";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HeaderLinks } from "../../helpers/navLinks";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <AppBar position="fixed" className={cn(className, styles.header)}>
      <Toolbar>
        <Typography variant="h4" noWrap component="div">
          Plarin
        </Typography>
        <nav>
          <ul className={styles.nav}>
            {HeaderLinks.map(({ id, name, link }) => (
              <li className={styles.link} key={id}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
