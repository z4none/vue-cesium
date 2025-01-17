import { version as VERSION } from '../package.json'
import CesiumViewer from '@/components/viewer/CesiumViewer.vue'

import ImageryLayer from '@/components/imageryLayers/ImageryLayer.vue'
import ArcGisMapServerImageryProvider from '@/components/imageryLayers/ArcGisMapServerImageryProvider.vue'
import BingMapsImageryProvider from '@/components/imageryLayers/BingMapsImageryProvider.vue'
// import GoogleEarthEnterpriseImageryProvider from '@/components/imageryLayers/GoogleEarthEnterpriseImageryProvider.vue'
import GridImageryProvider from '@/components/imageryLayers/GridImageryProvider.vue'
import IonImageryProvider from '@/components/imageryLayers/IonImageryProvider.vue'
import MapboxImageryProvider from '@/components/imageryLayers/MapboxImageryProvider.vue'
import OpenStreetMapImageryProvider from '@/components/imageryLayers/OpenStreetMapImageryProvider.vue'
import SingleTileImageryProvider from '@/components/imageryLayers/SingleTileImageryProvider.vue'
import TileCoordinatesImageryProvider from '@/components/imageryLayers/TileCoordinatesImageryProvider.vue'
import TileMapServiceImageryProvider from '@/components/imageryLayers/TileMapServiceImageryProvider.vue'
import UrlTemplateImageryProvider from '@/components/imageryLayers/UrlTemplateImageryProvider.vue'
import WebMapServiceImageryProvider from '@/components/imageryLayers/WebMapServiceImageryProvider.vue'
import WebMapTileServiceImageryProvider from '@/components/imageryLayers/WebMapTileServiceImageryProvider.vue'
import SuperMapImageryProvider from '@/components/imageryLayers/SuperMapImageryProvider.vue'

import CesiumTerrainProvider from '@/components/terrains/CesiumTerrainProvider.vue'

import CustomDataSource from '@/components/datasources/CustomDataSource.vue'
import CzmlDataSource from '@/components/datasources/CzmlDataSource.vue'
import GeoJsonDataSource from '@/components/datasources/GeoJsonDataSource.vue'
import KmlDataSource from '@/components/datasources/KmlDataSource.vue'

import Entity from '@/components/entities/Entity.vue'
import BillboardGraphics from '@/components/entities/BillboardGraphics.vue'
import BoxGraphics from '@/components/entities/BoxGraphics.vue'
import CorridorGraphics from '@/components/entities/CorridorGraphics.vue'
import CylinderGraphics from '@/components/entities/CylinderGraphics.vue'
import EllipseGraphics from '@/components/entities/EllipseGraphics.vue'
import EllipsoidGraphics from '@/components/entities/EllipsoidGraphics.vue'
import LabelGraphics from '@/components/entities/LabelGraphics.vue'
import ModelGraphics from '@/components/entities/ModelGraphics.vue'
import PathGraphics from '@/components/entities/PathGraphics.vue'
import PlaneGraphics from '@/components/entities/PlaneGraphics.vue'
import PointGraphics from '@/components/entities/PointGraphics.vue'
import PolygonGraphics from '@/components/entities/PolygonGraphics.vue'
import PolylineGraphics from '@/components/entities/PolylineGraphics.vue'
import PolylineVolumeGraphics from '@/components/entities/PolylineVolumeGraphics.vue'
import RectangleGraphics from '@/components/entities/RectangleGraphics.vue'
import WallGraphics from '@/components/entities/WallGraphics.vue'

import Primitive from '@/components/primitives/Primitive.vue'
import GroundPrimitive from '@/components/primitives/GroundPrimitive.vue'
import GroundPolylinePrimitive from '@/components/primitives/GroundPolylinePrimitive.vue'
import ClassificationPrimitive from '@/components/primitives/ClassificationPrimitive.vue'

import PrimitiveCollection from '@/components/primitives/PrimitiveCollection.vue'
import PointCollection from '@/components/primitives/PointPrimitiveCollection.vue'
import PointPrimitive from '@/components/primitives/PointPrimitive.vue'
import PolylineCollection from '@/components/primitives/PolylineCollection.vue'
import Polyline from '@/components/primitives/Polyline.vue'
import LabelCollection from '@/components/primitives/LabelCollection.vue'
import Label from '@/components/primitives/Label.vue'
import BillboardCollection from '@/components/primitives/BillboardCollection.vue'
import Billboard from '@/components/primitives/Billboard.vue'

import Cesium3DTileset from '@/components/primitives/Cesium3DTileset.vue'
import Model from '@/components/primitives/Model.vue'

import GeometryInstance from '@/components/geometries/GeometryInstance.vue'
import BoxGeometry from '@/components/geometries/BoxGeometry.vue'
import RectangleGeometry from '@/components/geometries/RectangleGeometry.vue'
import PolygonGeometry from '@/components/geometries/PolygonGeometry.vue'

import MeasureDistance from '@/components/tools/MeasureDistance.vue'
import MeasureArea from '@/components/tools/MeasureArea.vue'
import MeasureHeight from '@/components/tools/MeasureHeight.vue'
import DrawPolylineHandler from '@/components/tools/DrawPolylineHandler.vue'
import CesiumNavigation from '@/components/tools/CesiumNavigation.vue'

import CesiumHeatMap from '@/components/visualization/CesiumHeatMap.vue'
import CesiumWindMap from '@/components/visualization/CesiumWindMap.vue'
import CesiumFlood from '@/components/visualization/CesiumFlood.vue'
// import CesiumViewshed3D from '@/components/visualization/CesiumViewshed3D.vue'
import PostProcessStage from '@/components/particles/PostProcessStage.vue'

export default {
  install (Vue, options) {
    Vue.prototype._Cesium = () => options
    Vue.component(CesiumViewer.name, CesiumViewer, options)

    Vue.component(ImageryLayer.name, ImageryLayer)
    Vue.component(ArcGisMapServerImageryProvider.name, ArcGisMapServerImageryProvider)
    Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
    // Vue.component(GoogleEarthEnterpriseImageryProvider.name, GoogleEarthEnterpriseImageryProvider)
    Vue.component(GridImageryProvider.name, GridImageryProvider)
    Vue.component(IonImageryProvider.name, IonImageryProvider)
    Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
    Vue.component(OpenStreetMapImageryProvider.name, OpenStreetMapImageryProvider)
    Vue.component(SingleTileImageryProvider.name, SingleTileImageryProvider)
    Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
    Vue.component(TileCoordinatesImageryProvider.name, TileCoordinatesImageryProvider)
    Vue.component(TileMapServiceImageryProvider.name, TileMapServiceImageryProvider)
    Vue.component(WebMapServiceImageryProvider.name, WebMapServiceImageryProvider)
    Vue.component(WebMapTileServiceImageryProvider.name, WebMapTileServiceImageryProvider)
    Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)
    Vue.component(CesiumTerrainProvider.name, CesiumTerrainProvider)

    Vue.component(CustomDataSource.name, CustomDataSource)
    Vue.component(CzmlDataSource.name, CzmlDataSource)
    Vue.component(GeoJsonDataSource.name, GeoJsonDataSource)
    Vue.component(KmlDataSource.name, KmlDataSource)

    Vue.component(Entity.name, Entity)
    Vue.component(BillboardGraphics.name, BillboardGraphics)
    Vue.component(BoxGraphics.name, BoxGraphics)
    Vue.component(CorridorGraphics.name, CorridorGraphics)
    Vue.component(CylinderGraphics.name, CylinderGraphics)
    Vue.component(EllipseGraphics.name, EllipseGraphics)
    Vue.component(EllipsoidGraphics.name, EllipsoidGraphics)
    Vue.component(LabelGraphics.name, LabelGraphics)
    Vue.component(ModelGraphics.name, ModelGraphics)
    Vue.component(PathGraphics.name, PathGraphics)
    Vue.component(PlaneGraphics.name, PlaneGraphics)
    Vue.component(PointGraphics.name, PointGraphics)
    Vue.component(PolygonGraphics.name, PolygonGraphics)
    Vue.component(PolylineGraphics.name, PolylineGraphics)
    Vue.component(PolylineVolumeGraphics.name, PolylineVolumeGraphics)
    Vue.component(RectangleGraphics.name, RectangleGraphics)
    Vue.component(WallGraphics.name, WallGraphics)

    Vue.component(Primitive.name, Primitive)
    Vue.component(GroundPrimitive.name, GroundPrimitive)
    Vue.component(GroundPolylinePrimitive.name, GroundPolylinePrimitive)
    Vue.component(ClassificationPrimitive.name, ClassificationPrimitive)

    Vue.component(PrimitiveCollection.name, PrimitiveCollection)
    Vue.component(PointCollection.name, PointCollection)
    Vue.component(PointPrimitive.name, PointPrimitive)
    Vue.component(PolylineCollection.name, PolylineCollection)
    Vue.component(Polyline.name, Polyline)
    Vue.component(LabelCollection.name, LabelCollection)
    Vue.component(Label.name, Label)
    Vue.component(BillboardCollection.name, BillboardCollection)
    Vue.component(Billboard.name, Billboard)

    Vue.component(Model.name, Model)
    Vue.component(Cesium3DTileset.name, Cesium3DTileset)

    Vue.component(GeometryInstance.name, GeometryInstance)
    Vue.component(BoxGeometry.name, BoxGeometry)
    Vue.component(RectangleGeometry.name, RectangleGeometry)
    Vue.component(PolygonGeometry.name, PolygonGeometry)

    Vue.component(MeasureDistance.name, MeasureDistance)
    Vue.component(MeasureArea.name, MeasureArea)
    Vue.component(MeasureHeight.name, MeasureHeight)
    Vue.component(DrawPolylineHandler.name, DrawPolylineHandler)
    Vue.component(CesiumNavigation.name, CesiumNavigation)

    Vue.component(CesiumHeatMap.name, CesiumHeatMap)
    Vue.component(CesiumWindMap.name, CesiumWindMap)
    Vue.component(CesiumFlood.name, CesiumFlood)

    Vue.component(PostProcessStage.name, PostProcessStage)
  },
  VERSION
}

export {
  VERSION,
  CesiumViewer,
  ImageryLayer,
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  GridImageryProvider,
  IonImageryProvider,
  MapboxImageryProvider,
  OpenStreetMapImageryProvider,
  SingleTileImageryProvider,
  TileCoordinatesImageryProvider,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  WebMapServiceImageryProvider,
  WebMapTileServiceImageryProvider,
  SuperMapImageryProvider,
  CesiumTerrainProvider,
  CustomDataSource,
  CzmlDataSource,
  GeoJsonDataSource,
  KmlDataSource,
  Entity,
  BillboardGraphics,
  BoxGraphics,
  CorridorGraphics,
  CylinderGraphics,
  EllipseGraphics,
  EllipsoidGraphics,
  LabelGraphics,
  ModelGraphics,
  PathGraphics,
  PlaneGraphics,
  PointGraphics,
  PolygonGraphics,
  PolylineGraphics,
  PolylineVolumeGraphics,
  RectangleGraphics,
  WallGraphics,
  Primitive,
  GroundPrimitive,
  GroundPolylinePrimitive,
  ClassificationPrimitive,
  PrimitiveCollection,
  PointCollection,
  PointPrimitive,
  PolylineCollection,
  Polyline,
  LabelCollection,
  Label,
  BillboardCollection,
  Billboard,
  Model,
  Cesium3DTileset,
  GeometryInstance,
  BoxGeometry,
  RectangleGeometry,
  PolygonGeometry,
  MeasureDistance,
  MeasureArea,
  MeasureHeight,
  DrawPolylineHandler,
  CesiumNavigation,
  CesiumHeatMap,
  CesiumWindMap,
  CesiumFlood,
  PostProcessStage
}
