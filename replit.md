# Dragon Client

## Overview

Dragon Client is a Minecraft client modification (mod) that has been converted from Java to JavaScript. The project is version 2.1, created by Fatal. This is a comprehensive Minecraft client enhancement tool that provides various gameplay modifications organized into categories like Combat, Movement, Player, Render, HUD, and Misc.

**Important Note:** This is a code structure transformation project. The JavaScript version maintains the architectural patterns of the original Java implementation but requires a Minecraft environment to run fully. The conversion focuses on preserving the module system, event handling, and command structure rather than creating a standalone application.

## Recent Changes

**November 20, 2025 - Complete Java to JavaScript Conversion**
- Converted all 123 Java files to JavaScript with ES6 module syntax
- All original .java files have been deleted
- Core systems converted: Dragon, Module, Category, Event, Command, Settings
- All 61 modules converted across 6 categories (Combat, Movement, Player, Render, HUD, Misc)
- Event system: 17 event classes fully converted
- Command system: Base classes and managers converted
- ClickGUI system: Structural conversion completed; full rendering implementation would require detailed graphics logic beyond basic conversion
- UI components: ArrayList, DragScreen, MainMenu, TabGui converted
- Utility classes: 22 utility classes converted as architectural stubs
- Added DragScreen initialization in Dragon.startClient()
- Enhanced ClickGui event propagation for mouse and keyboard events
- Improved Frame and Component classes with proper methods and event handling

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Module System Architecture

The core architecture follows a **modular plugin pattern** where functionality is divided into discrete, toggleable modules organized by category:

- **Module Base Class**: All mods inherit from `Module.js`, which provides toggle state management, event hooks (onEnable, onDisable, onUpdate, onRender), and settings integration
- **Category Organization**: Modules are grouped into six categories (Combat, Movement, Player, Render, HUD, Misc) using the `Category.js` enum-like object
- **Module Manager**: `ModuleManager.js` acts as a registry and lifecycle coordinator for all available modules
- **RenderModule Extension**: Special modules that require screen positioning extend `RenderModule.js` for HUD-related features

**Design Rationale**: This architecture allows easy addition of new features without modifying core systems. Each module is self-contained and can be toggled independently.

### Event System Architecture

The project implements a **custom event bus pattern**:

- **Event Base Class**: `Event.js` provides common event properties including cancellation status, event type (PRE/POST), and direction (INCOMING/OUTGOING)
- **Event Types**: Specialized events inherit from the base (EventUpdate, EventRender2D, EventMotion, EventChat, etc.)
- **Event Flow**: Events are dispatched through modules via the `onEvent()` method, allowing modules to intercept and modify game behavior

**Design Rationale**: This decoupled approach allows modules to react to game events without tight coupling to the Minecraft codebase. Events can be cancelled to prevent default behavior.

### Command System Architecture

A **command pattern implementation** for runtime configuration:

- **Command Base**: `Command.js` defines the interface with name, description, syntax, and aliases
- **Command Manager**: `CommandManager.js` handles command registration, parsing, and routing
- **Prefix System**: Commands use a configurable prefix (default: ".") for invocation
- **Argument Parsing**: Built-in argument splitting and command lookup by name or alias

**Design Rationale**: Provides a clean interface for users to configure modules and trigger actions without requiring UI interaction.

### Settings System Architecture

A **flexible settings management system**:

- **Setting Types**: Supports three types - Combo (dropdown), Check (boolean), and Slider (numeric range)
- **Parent-Child Relationship**: Settings are linked to their parent modules
- **Settings Manager**: Central registry (`SettingsManager.js`) for querying settings by module or name
- **Type Detection**: Constructor overloading pattern using argument inspection to determine setting type

**Design Rationale**: Allows modules to expose configurable parameters without hardcoding values, enabling runtime customization.

### UI Architecture

**Click GUI System**:
- **Frame-Based Layout**: Each category gets its own draggable frame (`Frame.js`)
- **Component Hierarchy**: Frames contain components (buttons, sliders, checkboxes) that are recursively rendered
- **Mouse Interaction**: Event delegation pattern for mouse clicks, releases, and dragging
- **Stateful Rendering**: Frames track open/closed state and drag position
- **Note**: ClickGUI structure is converted but requires detailed rendering implementation (font rendering, component creation from modules) for full functionality

**HUD System**:
- **ArrayList**: Display of active modules
- **DragScreen**: Allows repositioning of HUD elements
- **Render Modules**: Specialized modules for on-screen information display

**Design Rationale**: Separates visual representation from business logic. The GUI is built on reusable components that can be composed into complex interfaces.

### Minecraft Integration Layer

The architecture maintains **references to Minecraft internals** through:

- **mc Property**: Each module stores a reference to the Minecraft instance
- **Conditional Checks**: Guards against undefined Minecraft objects (`typeof Minecraft !== 'undefined'`)
- **Method Delegation**: Calls to Minecraft methods (sendChatMessage, clickMouse, etc.) are isolated to specific modules

**Design Rationale**: This abstraction layer allows the code to run in non-Minecraft environments for testing/development while maintaining the ability to interact with the game when available.

### Client Initialization Pattern

The `Dragon.js` class uses a **singleton pattern** with static initialization:

- **Static Instance**: Single client instance accessible globally
- **Manager Registration**: Sequential initialization of settings, modules, commands, and UI
- **Display Title**: Branding applied to the game window on startup

**Design Rationale**: Ensures only one client instance exists and provides a predictable initialization sequence.

## External Dependencies

### Minecraft Game Engine
- **Type**: External game platform
- **Purpose**: Host environment for the client mod
- **Integration**: Direct API calls to Minecraft classes (thePlayer, theWorld, gameSettings, etc.)
- **Note**: References are guarded with existence checks since the JavaScript conversion may run outside Minecraft

### Node.js Runtime
- **Type**: JavaScript execution environment
- **Purpose**: Development and testing outside Minecraft
- **Integration**: ES6 module system (`import`/`export`), console logging
- **Version**: Requires ES6 support (module type in package.json)

### Utility Libraries (Stub Implementations)
The following utility classes are present but currently unimplemented:
- **Rendering Utilities**: RenderUtil, RenderUtils, RenderShit - for drawing game overlays
- **Math Utilities**: MathUtil, RotationUtil - for calculating angles and positions  
- **Player Utilities**: PlayerUtils, MoveUtils - for player state manipulation
- **Time Utilities**: Timer, Stopwatch, TimeHelper - for timing-based features
- **Network Utilities**: PacketUtil - for network packet manipulation
- **Block Utilities**: BlockUtils, ChestEspUtil - for block interaction

**Note**: These utilities are architectural placeholders converted from the Java version and require implementation for full functionality.