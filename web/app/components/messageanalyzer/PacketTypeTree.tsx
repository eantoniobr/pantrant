import { Classes, Tree, TreeNodeInfo } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import * as React from 'react';
import { Message, MessageType } from '../../cassette';
import { getPacketName } from '../../packetdef';
import { AppDataContext } from '../AppData';

interface Props {
  messageTypes: MessageType[];
  messages: Map<MessageType, Message[]>;
  setCurrentMessageType: (type: MessageType|null) => void;
}

interface State {
  expanded: Set<string|number>;
  selected: string|number|null;
}

export const PacketTypeTree = (props: Props) => {
  const [state, setState] = React.useState<State>({
    expanded: new Set,
    selected: null,
  });

  const handleNodeClick = React.useCallback((node: TreeNodeInfo<MessageType>) => {
    props.setCurrentMessageType(node.nodeData ?? null);
    setState({...state, selected: node.id});
  }, [state]);

  const handleNodeCollapse = React.useCallback((node: TreeNodeInfo<MessageType>) => {
    const expanded = new Set(state.expanded);
    expanded.delete(node.id);
    setState({...state, expanded});
  }, [state]);

  const handleNodeExpand = React.useCallback((node: TreeNodeInfo<MessageType>) => {
    const expanded = new Set(state.expanded);
    expanded.add(node.id);
    setState({...state, expanded});
  }, [state]);

  let tree: TreeNodeInfo<MessageType>[] = [];
  let kindNodes: Map<string, {
    parent: TreeNodeInfo<MessageType>;
    originNodes: Map<string, {
      parent: TreeNodeInfo<MessageType>;
    }>;
  }> = new Map();

  for (const msgType of props.messageTypes) {
    let kindNode = kindNodes.get(msgType.Kind);
    if (!kindNode) {
      const id = `${msgType.Kind}`;
      const node: TreeNodeInfo<MessageType> = {
        id,
        icon: "application",
        isExpanded: state.expanded.has(id),
        isSelected: state.selected === id,
        label: msgType.Kind,
        childNodes: [],
      }
      kindNode = {
        parent: node,
        originNodes: new Map()
      }
      kindNodes.set(msgType.Kind, kindNode);
      tree.push(node);
    }
    let originNode = kindNode.originNodes.get(msgType.Origin);
    if (!originNode) {
      const id = `${msgType.Kind}-${msgType.Origin}`;
      const node: TreeNodeInfo<MessageType> = {
        id,
        icon: msgType.Origin === "client" ? "import" : "export",
        isExpanded: state.expanded.has(id),
        isSelected: state.selected === id,
        label: msgType.Origin === "client" ? "Client" : "Server",
        childNodes: [],
      }
      originNode = {
        parent: node
      }
      kindNode.originNodes.set(msgType.Origin, originNode);
      kindNode.parent.childNodes = [...kindNode.parent.childNodes ?? [], node];
    }
    const name = getPacketName(msgType.Kind, msgType.Origin, msgType.ID);
    const id = `${msgType.Kind}-${msgType.Origin}-${msgType.ID}`;
    const node: TreeNodeInfo<MessageType> = {
      id,
      icon: "document",
      label: (
        <Tooltip2 content={name} placement="top-start">{name}</Tooltip2>
      ),
      nodeData: msgType,
      isSelected: state.selected === id,
    };
    originNode.parent.childNodes = [...originNode.parent.childNodes ?? [], node]
  }

  return (
    <AppDataContext.Consumer>
      {appData => appData?.currentCassette ? (
        <Tree<MessageType>
          contents={tree}
          onNodeClick={handleNodeClick}
          onNodeCollapse={handleNodeCollapse}
          onNodeExpand={handleNodeExpand}
          className={Classes.ELEVATION_0}
        />
      ) : null}
    </AppDataContext.Consumer>
  );
};
