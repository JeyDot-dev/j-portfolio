import { List, Icon, Heading, Box } from "@chakra-ui/react";
import { Tooltip } from "../chakra/tooltip";
/**
 * A React component that renders a list of icons with tooltips based on an object of items.
 * Each key-value pair in the `items` object is displayed as an icon with a tooltip showing the key.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {Object} props.items - An object where each key-value pair represents the tooltip content (key) and the icon (value).
 * @param {Object} [props.tooltipProps] - Additional props to customize the Chakra UI Tooltip component.
 * @param {Object} [props.iconProps] - Additional props to customize the Chakra UI Icon component.
 * @param {React.ReactNode} props.children - The content to display as the heading of the list.
 * @param {Object} [props.props] - Additional props to pass to each `List.Item`.
 *
 * @returns {JSX.Element} The rendered list of icons with tooltips.
 *
 * @example
 * <ObjectToIconListWithTooltip
 *   items={{
 *     "Home": <HomeIcon />,
 *     "Settings": <SettingsIcon />,
 *   }}
 *   tooltipProps={{ bg: "gray.700" }}
 *   iconProps={{ color: "blue.500" }}
 * >
 *   My Icons
 * </ObjectToIconListWithTooltip>
 */
export function ObjectToIconListWithTooltip({
  items,
  listProps = {},
  tooltipProps = {},
  iconProps = {},
  children = null,
  ...props
}) {
  return (
    <Box {...props}>
      {children && (
        <Heading my="auto" mb="1rem">
          {children}
        </Heading>
      )}
      <List.Root
        flexDirection="row"
        variant="plain"
        gap="3"
        flexWrap="wrap"
        w="100%"
        {...listProps}
      >
        {items && Object.keys(items).length > 0 ? (
          Object.entries(items).map(([key, value]) => {
            return (
              <List.Item key={key + "-listItem"}>
                <Tooltip
                  key={key + "-tooltip"}
                  content={key}
                  positioning={{ placement: "top" }}
                  showArrow
                  openDelay={200}
                  closeDelay={100}
                  contentProps={{
                    bg: "sec.fg",
                    ...tooltipProps,
                  }}
                >
                  <Icon
                    w="3.5rem"
                    h="3.5rem"
                    // color={{ _hover: "prim.emphasized" }}
                    {...iconProps}
                  >
                    {value}
                  </Icon>
                </Tooltip>
              </List.Item>
            );
          })
        ) : (
          <List.Item>Empty item</List.Item>
        )}
      </List.Root>
    </Box>
  );
}
